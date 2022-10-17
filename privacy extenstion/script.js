function getCurrentURL () {
    return window.location.href
}

let url = getCurrentURL();

let links = ["https://drive.google.com/drive/u/1/my-drive","https://www.instagram.com/","https://drive.google.com/drive/u/2/my-drive"]

links.forEach(check);

// change password if you want
const password = "@password";

function check(lockurl){
    if(url==lockurl){
        
        console.log("this website is locked " + lockurl)

        function disableScroll() {
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        }

        function enableScroll() {
            window.onscroll = function() {};
        }

        disableScroll()

        var div = document.createElement("p");
        div.setAttribute('id','maindiv')

        var element = document.body;
        element.appendChild(div);

        let mainDiv = document.getElementById('maindiv')
        let divStyles = {
            position : "absolute",
            top : "-25px",
            backgroundColor : "red",
            height : "100vh",
            width : "100vw",
            zIndex : "1px",
            background: "rgba( 255, 255, 255, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) ",
            backdropFilter: "blur( 12px )",
            borderRadius: "10px",
            border : "1px solid rgba( 255, 255, 255, 0.18 )"
        }
        Object.assign(mainDiv.style,divStyles)


        let pwd = document.createElement('input');
        pwd.setAttribute('type','text')
        pwd.setAttribute('id','pass')
        pwd.setAttribute('placeholder','password')

        let pwdStyles = {
            position : "absolute",
            top : "48%",
            left : "44%"
        }
        Object.assign(pwd.style,pwdStyles)

        let btn = document.createElement('button');
        btn.textContent = "unlock 🔓"

        let btnStyles = {
            position : "absolute",
            top : "53%",
            left : "47%"
        }
        Object.assign(btn.style,btnStyles)

        mainDiv.appendChild(pwd)
        mainDiv.appendChild(btn)

        btn.addEventListener('click',()=>{

            let pass = document.getElementById('pass').value;

            if(pass==password){
                    enableScroll();
                    document.getElementById('maindiv').remove();
                    console.log("enable")
            }
        })
    }

    else{
        console.log('this website is not locked ' + url)
    }
        
}
