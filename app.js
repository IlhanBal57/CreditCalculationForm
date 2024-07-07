let buton = document.querySelector("#btn");
buton.addEventListener("click", krediHesapla);



function krediHesapla() {
    var cekilecekTutar, vadeSayisi;
    var aylikTaksit, odenecekToplamTutar;

    cekilecekTutar = document.querySelector("#tutar").value;

    var liste = document.querySelector("#taksit");
    vadeSayisi = liste.options[liste.selectedIndex].value;

    if (vadeSayisi == 12) {
        odenecekToplamTutar = cekilecekTutar * 1.1;
    }
    else if (vadeSayisi == 24) {
        odenecekToplamTutar = cekilecekTutar * 1.2;
    }
    else if (vadeSayisi == 36) {
        odenecekToplamTutar = cekilecekTutar * 1.3;
    }
    else if (vadeSayisi == 48) {
        odenecekToplamTutar = cekilecekTutar * 1.4;
    }

    aylikTaksit = odenecekToplamTutar / vadeSayisi;

    document.querySelector(".popup").style.display = "flex";

    document.querySelectorAll(".sonuc")[0].innerHTML = "Ödenecek Toplam Tutar : " + odenecekToplamTutar.toFixed(2) + " TL"
    document.querySelectorAll(".sonuc")[1].innerHTML = "Aylık Taksit Tutarı : " + aylikTaksit.toFixed(2) + " TL"
}

document.querySelector("#close").addEventListener("click", close);

function close() {
    document.querySelector(".popup").style.display = "none"
}
