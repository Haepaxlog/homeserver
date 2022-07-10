let push = document.getElementsByClassName("push")    

for (let element of push){
    element.onclick = () => {
	window.location.assign("/" + element.id)
    }
}


