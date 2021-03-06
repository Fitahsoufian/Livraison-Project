const nodemailer = require("nodemailer")
const {Order,Repas,Facture,RepasOrder,User} = require('../config/Migrations')
exports.createFacture = async (req,res)=>{
    const orderId = req.params.id
    const totalPrice = req.body.totalPrice
    const order = await Order.findOne({raw: true},{where:{id: orderId}})
    const user = await User.findOne({where: {id: order.UserId}})
    const repasOrder = await RepasOrder.findAll({raw: true},{where: {OrderId: orderId}})
    console.log(repasOrder)
    const repas = await Repas.findAll({raw: true}, {where: {id: repasOrder.RepaId}})

    // if(!order.status == 'delivered'){
    //     res.status(400).json({
    //         message: 'order status its not delivered you cant create facture'
    //     })
    // }
    try {
        const facture = await Facture.create({
            totalPrix: totalPrice,
            OrderId: orderId
        })
        
    
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            secure: false,
            secureConnection: false, // TLS requires secureConnection to be false
            tls: {
            ciphers: "SSLv3",
            },
            requireTLS: true,
            port: 587,
            service: 'outlook',
            debug: true, 
            auth: {
            user: `fitahsoufian@outlook.fr`, 
            pass: `SFTSFT99`, 
            },
        });
    
     await transporter.sendMail({
            from: '"Dark sider" fitahsoufian@outlook.fr', 
            to: `${user.email}`, 
            subject: "facture de l'ordre",
            text: "test", 
            html: `<b>Facture de l'order</b>
                    ${order.adresse}
                    
                    Here is you  Bill`, 
        });
    
    
        console.log('here');
        res.status(200).json({
            message: 'facture created successfully',facture 
        })
        
    } catch (error) {
        
        res.send(error)
        
    }

}