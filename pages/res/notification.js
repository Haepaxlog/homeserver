let submit = document.getElementById("submit")
let tp = document.getElementById("topic")
let dp = document.getElementById("description")

submit.onclick = () => {
    if (tp.value != "" && dp.value != ""){
	tp.style.border = "none";
	dp.style.border = "none";
	fetch("/submit/notification", {
	    method: "POST",
	    headers: {
		"Content-Type": "application/json",
	    },
	    body: JSON.stringify(
		{ topic: tp.value, description: dp.value })
	}).then(response => {
	    if (response.ok) {
		window.location.assign("/notification")
	    }
	}).catch(err => {
	    console.log(err)
	})
    } else {
	if (tp.value == ""){
	    tp.style.border = "0.15rem solid red";
	}
	if (dp.value == ""){
	    dp.style.border = "0.15rem solid red";
	}
    }
}



let notificationGet = async() => {
    let res = await fetch("/db/notification")
	.then((res) => {
	    return res
	})
	.catch((err) => {
	    return err
	})
    let data = res.json()
    return data
}

let view = document.getElementById("view")

async function drawNotifications() {
    let notifications = await notificationGet()
    for (let notification of notifications) {
	if(notification != null) {
	    let p1 = document.createElement("p")
	    let p2 = document.createElement("p")
	    let div = document.createElement("div")
	    let subdiv1 = document.createElement("div")
	    let subdiv2 = document.createElement("div")
	    subdiv1.className = "panel"
	    p1.innerText = notification.topic
	    p2.innerText = notification.description

	    view.appendChild(div)
	    div.appendChild(subdiv1)
	    subdiv1.appendChild(p1)
	    div.appendChild(subdiv2)
	    subdiv2.appendChild(p2)
	}
    }
}

drawNotifications().then()
