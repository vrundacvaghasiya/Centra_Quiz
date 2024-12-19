import React, { useState } from "react";
import {
  initialCustomerInfo,
  initialOrderDetails,
  initialSummaryInfo,
} from "../constants/commanLabel";
import PDFMerger from "pdf-merger-js/browser";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export function useQuiz() {
  const merger = new PDFMerger();
  const doc = new jsPDF();

  const [customerInfo, setCustomerInfo] = useState(initialCustomerInfo);
  const [summary, setSummary] = useState(initialSummaryInfo);
  const [orderDetailsInfo, SetOrderDetailsInfo] = useState(initialOrderDetails);
  const [files, setFiles] = useState([]);
  const [Loading, setLoading] = useState(false);

  React.useEffect(() => {
    setCustomerInfo(customerInfo);
  }, [customerInfo, summary, orderDetailsInfo, files]);

  const updateFields = (updates, key) => {
    key((prevFormData) => {
      const updatedFormData = { ...prevFormData };
      for (let key in updates) {
        if (updates.hasOwnProperty(key)) {
          if (updatedFormData[key]) {
            updatedFormData[key] = {
              ...updatedFormData[key],
              ...updates[key],
            };
          }
        }
      }

      return updatedFormData;
    });
  };

  const handleChange = (e, state) => {
    const { name, value } = e.target;
    updateFields(
      {
        [name]: {
          value,
          error: value === "" || !e.target.checkValidity() ? true : false,
        },
      },
      state
    );
  };

  const handleFileChange = async (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const file = URL.createObjectURL(event.target.files[0]);
      const newFiles = Array.from(selectedFiles);
      if (newFiles[0].type === "image/png") {
        imageToPdf(event);
      } else {
        setFiles([...files, file]);
      }
    }
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      const file = URL.createObjectURL(event.dataTransfer.files[0]);
      if (newFiles[0]?.type === "image/png") {
        imageToPdf(event, "drag");
      } else {
        setFiles([...files, file]);
      }
    }
  };

  const imageToPdf = async (event, type = "") => {
    const file =
      type === "drag" ? event.dataTransfer.files[0] : event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        doc.addImage(reader.result, "JPEG", 10, 10, 180, 160);
        const pdfBlob = doc.output("blob");
        const url = URL.createObjectURL(pdfBlob);
        setFiles([...files, url]);
      };
      reader.readAsDataURL(file);
    }
  };

  const isFieldEmpty = (state, updateState) => {
    Object.entries(state).map(([key, val]) => {
      return (
        val.value === "" &&
        updateFields(
          {
            [key]: {
              value: val.value,
              error: val.value === "" ? true : false,
              helperText: val.helperText,
            },
          },
          updateState
        )
      );
    });
  };

  const convertPdF = async () => {
    isFieldEmpty(customerInfo, setCustomerInfo);
    isFieldEmpty(orderDetailsInfo, SetOrderDetailsInfo);
    isFieldEmpty(summary, setSummary);

    const allObject = { ...orderDetailsInfo, ...customerInfo, ...summary };
    const isValidForm = Object.values(allObject).filter((i) => i.value === "");

    if (isValidForm.length <= 0) {
      setLoading(true);
      const input = document.getElementById("capture");
      const canvas = await html2canvas(input);
      const data = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        disableFontFace: true,
        compress: true,
      });
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      pdf.addImage(data, "PNG", 0, 10, pdfWidth, pdfHeight, "FAST");
      const pdfBlob = pdf.output("blob");
      const url = URL.createObjectURL(pdfBlob);

      await merger.add(url);
      const outputPath = `downloaded-file-${Date.now()}`;

      try {
        for (const filePath of files) {
          await merger.add(filePath);
        }
        await merger.save(outputPath);
        setTimeout(
          () =>
            fetch(
              `http://localhost:3002/api/sendEmail?query=${outputPath}&&wo=${customerInfo.workOrder.value}`
            )
              .then((response) => response.json())
              .then((data) => {
                setLoading(false);
                setCustomerInfo(initialCustomerInfo);
                setFiles([]);
                setSummary(initialSummaryInfo);
                SetOrderDetailsInfo(initialCustomerInfo);
              }),
          5000
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  return {
    summary,
    setSummary,
    orderDetailsInfo,
    SetOrderDetailsInfo,
    customerInfo,
    setCustomerInfo,
    files,
    setFiles,
    handleChange,
    updateFields,
    handleFileChange,
    handleDrop,
    convertPdF,
    Loading,
  };
}
