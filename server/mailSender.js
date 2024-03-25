import nodemailer from "nodemailer"
import 'dotenv/config'

class MailSender{
   constructor(){
      this.transporter = nodemailer.createTransport({
         host: process.env.VITE_MAIL_HOST,
         port: process.env.VITE_MAIL_PORT,
         secure: true,
         auth: {
            user: process.env.VITE_MAIL_USER,
            pass: process.env.VITE_MAIL_PASS,
         },
      });
   }

   async sendEmail(letter) {
      if((letter.hasOwnProperty('isCalculator'))){
         const info = await this.transporter.sendMail({
            from: process.env.VITE_MAIL_USER,
            to: process.env.VITE_MAIL_USER,
            subject: `Новая заявка от ${letter?.necessarily?.name}, ${letter?.necessarily?.phone}`,
            html: `
                  <div style="display: flex; flex-direction:column; background-color: #FFA800; padding: 10px; color: white">
                     <h1 style="font-style: italic; font-size: 1.5rem; justify-self: center;">NaVi Cleaning</h1>
                     <p style="font-size:1.5rem">Заявка из калькулятора расчета стоимости.</p>
                     <p style="font-size:1.15rem">Имя: ${letter?.necessarily?.name}</p>
                     <p style="font-size:1.15rem">Телефон: ${letter?.necessarily?.phone}</p>
                     <p style="font-size:1.15rem">Адресная информация. город: ${letter?.necessarily?.city}, улица: ${letter?.necessarily?.street}, дом: ${letter?.necessarily?.house}</p>
                     <p style="font-size:1.15rem">Что выбрано клиентом: ${letter?.cleaningInfo?.selected}, количество комнат/площадь: ${letter?.cleaningInfo?.areaCount}, и санузлов: ${letter?.cleaningInfo?.washRooms}</p>
                     <p style="font-size:1.15rem">Вариант уборки: ${letter?.variantsCleaning.selected}</p>
                     <p style="font-size:1.15rem">Тип уборки: ${letter?.typesCleaning.selected}</p>
                     <p style="font-size:1.15rem">Комментарии: ${letter?.necessarily?.commentary}</p>
                  </div>
               `,
         });
         return info

      } else{
      const info = await this.transporter.sendMail({
         from: process.env.VITE_MAIL_USER,
         to: process.env.VITE_MAIL_USER,
         subject: `Новая заявка от ${letter?.name}, ${letter?.phone}`,
         html: `
               <div style="display: flex; flex-direction:column; background-color: #FFA800; padding: 10px; color: white">
                  <h1 style="font-style: italic; font-size: 1.5rem; justify-self: center;">NaVi Cleaning</h1>
                  <p style="font-size:1.15rem">Имя: ${letter?.name}</p>
                  <p style="font-size:1.15rem">Телефон: ${letter?.phone}</p>
               </div>
            `,
      });
      return info
      }
   }
}

export default new MailSender()