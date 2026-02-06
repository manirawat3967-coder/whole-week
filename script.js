function yesClick() {
    window.location.href = "rose.html";
}

function noClick() {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            background: linear-gradient(135deg, #ff758c, #ff7eb3);
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            color:white;
            text-align:center;
            font-family:Arial;
        ">
            <img src="angry.png" width="220" style="margin-bottom:20px;">
            
            <h1>You better say YES 😤</h1>

            <button onclick="goBack()" style="
                margin-top:25px;
                padding:10px 22px;
                border:none;
                border-radius:25px;
                background:white;
                color:#ff4d6d;
                font-size:16px;
                cursor:pointer;
            ">
                🔙 Return Back
            </button>
        </div>
    `;
}

function goBack() {
    window.location.href = "index.html";
}

