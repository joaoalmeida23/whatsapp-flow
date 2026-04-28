function responder(tipo){

    const chat = document.getElementById("chat");

    let usuario = "";
    let resposta = "";

    if(tipo === "orcamento"){

        usuario = "📸 Solicitar orçamento";

        resposta = `
        <div class="mensagem bot">

        Perfeito 😊 <br><br>

        Qual tipo de ensaio você procura?
        <br><br>

        📸 Ensaio fotográfico<br>
        💍 Casamento<br>
        🎉 Evento/aniversário<br>
        🏢 Corporativo

        </div>
        `;
    }

    else if(tipo === "portfolio"){

        usuario = "📷 Ver portfólio";

        resposta = `
        <div class="mensagem bot">

        Confira alguns trabalhos recentes 😊

        <div class="galeria">

            <img src="GALERIA/cas1.jpeg">

            <img src="GALERIA/corporatino6.jpeg">

            <img src="GALERIA/ensaio3.jpeg">

        </div>

        <a href="https://www.instagram.com/realmeidaphoto"
           target="_blank"
           class="link-btn">

           📸 Ver Instagram

        </a>

        </div>
        `;
    }

    else if(tipo === "whatsapp"){

        usuario = "💬 Falar no WhatsApp";

        resposta = `
        <div class="mensagem bot">

        Clique abaixo para continuar o atendimento 😊
        <br><br>

        <a href="https://wa.me/5511961410214"
           target="_blank"
           class="link-btn">

           💬 Abrir WhatsApp

        </a>

        </div>
        `;
    }

    const msgUsuario = document.createElement("div");

    msgUsuario.classList.add("mensagem");
    msgUsuario.classList.add("usuario");

    msgUsuario.innerHTML = usuario;

    chat.appendChild(msgUsuario);

    setTimeout(() => {

        const msgBot = document.createElement("div");

        msgBot.innerHTML = resposta;

        chat.appendChild(msgBot);

        chat.scrollTop = chat.scrollHeight;

    }, 700);

}