const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {
    if (!message.member.roles.cache.has("789923692377276427")) return;
    let yasaklı = ["discord.gg", ".gg", "gg", "com"]
    let tag = "†"
    let unTag = "•"
    let isim = message.member.displayName
    let log = client.channels.cache.get("799670433955708968")
    let nick = args.slice(0).join(' ')
    if (!nick) return
    if (yasaklı.some(s => nick.toLowerCase().includes(s))) {
        message.delete({ timeout: 1 })
        const crossembed = new MessageEmbed().setColor('RANDOM')
            .setDescription(`İsmine Reklam İçeren Bir Yazı Koyamazsınız!`)
        message.channel.send(crossembed)
        return
    }
    let name = `${message.member.user.username.includes(tag) ? tag : unTag} ${nick}`
    if (!message.member.user.username.includes(tag)) {
        message.member.setNickname(name)
    } else if (message.member.user.username.includes(tag)) {
        message.member.setNickname(name)
    }
    let logembed = new MessageEmbed()
        .setColor('RANDOM')
        .setFooter(`❤`).setTimestamp()
        .setDescription(`${message.author} Adlı kullanıcı ismini değiştirdi.
        Eski ismi: \`${isim}\`
        Yeni ismi: \`${name}\``)
    log.send(logembed)

}
exports.conf = {
    name: "booster",
    aliases: ["zengin"],
    permLevel: 0
};
