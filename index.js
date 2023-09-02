import qr from "qr-image";
import fs from 'fs'
import inquirer from "inquirer";
inquirer
  .prompt([
    {
      type: "text",
      message: "Enter your url for the qrCode destination",
      name: "URL",
    },
  ])
  .then((e) => {
    const url = e.URL
    const qrCode = qr.image(url)
    qrCode.pipe(fs.createWriteStream("qrCode.png"))
  }).catch((err)=>{
    console.log(err)
  })
