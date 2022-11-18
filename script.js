let myarry = ["King", "Queen", "Jaquline", "Yashoda", "Asmitha", "Jennifer", "Siyan", "Quezella", "Lorence", "Larry", "Kutti", "Kanna", "Jimmy"];

for (let i = 0; i < myarry.length; i++) {
    if (myarry[i][0] === "j" || myarry[i][0] === "J") {
        console.log(`goodbye ${myarry[i]}`)
    } else {
        console.log(`hello ${myarry[i]}`)

    }
}