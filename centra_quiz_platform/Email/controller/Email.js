const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const os = require("os");
const userProfile = os.homedir();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "vrundavaghasiya5@gmail.com",
    pass: "rens vryo tklv nqlv",
  },
});

exports.sendEmail = function (req, res) {
  (async () => {
    const relativePath = `${userProfile}/Downloads`;
    const absolutePath = path.resolve(relativePath);
    const fs = require("fs");
    const info = await transporter.sendMail({
      to: "vrundacvaghasiya@gmail.com,Khatri@centra.ca, mxu@centra.ca",
      subject: `W/O# ${req.query.wo} - New Order Intake – Supply & Install`,
      html: "<b>All fields from the form</b>",
      attachments: [
        {
          filename: "demo.pdf",
          path: await fs.promises.access(
            `${absolutePath}/${req.query.query}.pdf`
          ),
          content: fs.createReadStream(
            `${absolutePath}/${req.query.query}.pdf`
          ),
        },
      ],
    });
    transporter.sendMail(info, (error, info) => {
      if (error) {
        return console.log("Error:", error);
      }
    });
    return res.status(200).send({ data: info });
  })();
};
