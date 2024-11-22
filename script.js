function choosePath(choice) {
    const storyText = document.getElementById("story-text");
    const choices = document.getElementById("choices");

    // Pintu Kiri - Hutan Misteri
    if (choice === "left") {
        storyText.innerHTML = "Anda memasuki Hutan Misteri yang gelap. Pohon-pohon besar menjulang tinggi dan suara-suara aneh dapat didengar dari kejauhan. Tiba-tiba, anda bertemu dengan seorang penjaga hutan yang menyarankan anda untuk pergi ke salah satu dari dua tempat: sebuah gua yang menyimpan rahsia kuno atau sebuah sungai yang mampu menyembuhkan luka. Apa yang anda pilih?";
        choices.innerHTML = `
            <button onclick="choosePath('cave')">Masuk ke dalam gua</button>
            <button onclick="choosePath('river')">Mengunjungi Sungai Ajaib</button>
        `;
    }

    // Pintu Tengah - Istana Terlarang
    else if (choice === "center") {
        storyText.innerHTML = "Pintu terbuka dan anda memasuki Istana Terlarang, tempat yang penuh dengan magis dan kuasa gelap. Anda melihat dua lorong: satu menuju ke ruang takhta raja yang misterius, dan satu lagi menuju ke bilik rahsia yang tidak pernah dibuka oleh sesiapa. Pilih dengan bijak!";
        choices.innerHTML = `
            <button onclick="choosePath('throne')">Masuk ke ruang takhta</button>
            <button onclick="choosePath('secretRoom')">Masuk ke bilik rahsia</button>
        `;
    }

    // Pintu Kanan - Sungai Ajaib
    else if (choice === "right") {
        storyText.innerHTML = "Anda tiba di tepi Sungai Ajaib yang berkilau di bawah cahaya bulan. Airnya begitu jernih dan sejuk, penuh dengan makhluk mistik yang berenang di dalamnya. Anda mendengar suara dari bawah sungai, seperti panggilan yang mengajak anda untuk menyelam. Atau anda boleh terus berjalan menyusuri sungai.";
        choices.innerHTML = `
            <button onclick="choosePath('dive')">Selam ke dasar sungai</button>
            <button onclick="choosePath('walk')">Berjalan menyusuri sungai</button>
        `;
    }

    // Masuk ke dalam gua
    else if (choice === "cave") {
        storyText.innerHTML = "Di dalam gua, anda menemui sebuah batu besar yang bercahaya. Batu itu memberitahu anda bahawa anda harus membuat pilihan antara dua kuasa: Kuasa cahaya atau Kuasa kegelapan. Setiap pilihan membawa akibat yang berbeza. Pilih dengan bijak!";
        choices.innerHTML = `
            <button onclick="choosePath('light')">Pilih Kuasa Cahaya</button>
            <button onclick="choosePath('darkness')">Pilih Kuasa Kegelapan</button>
        `;
    }

    // Mengunjungi Sungai Ajaib
    else if (choice === "river") {
        storyText.innerHTML = "Sungai Ajaib itu menyembuhkan luka anda dengan cepat. Ketika anda duduk di tepi sungai, anda melihat sebuah benda terapung yang aneh. Apakah itu? Anda bergegas menghampirinya dan menemukan sebuah kunci emas yang berkilau.";
        choices.innerHTML = `
            <button onclick="choosePath('key')">Ambil kunci emas</button>
            <button onclick="choosePath('leaveRiver')">Tinggalkan sungai</button>
        `;
    }

    // Masuk ke ruang takhta
    else if (choice === "throne") {
        storyText.innerHTML = "Di dalam ruang takhta, raja terlarang itu sedang menunggu anda. Dia memberitahu anda bahawa dunia ini sedang berada di ambang kehancuran dan hanya seorang yang benar-benar berani boleh menyelamatkannya. Anda diberi pilihan untuk menyelamatkan dunia atau melarikan diri.";
        choices.innerHTML = `
            <button onclick="choosePath('saveWorld')">Selamatkan dunia</button>
            <button onclick="choosePath('escape')">Melarikan diri</button>
        `;
    }

    // Masuk ke bilik rahsia
    else if (choice === "secretRoom") {
        storyText.innerHTML = "Bilik rahsia itu penuh dengan buku-buku kuno dan ramuan misterius. Di atas meja, ada sebuah buku besar yang memancarkan cahaya aneh. Anda membuka buku itu dan menemui ramuan untuk membuka dimensi lain.";
        choices.innerHTML = `
            <button onclick="choosePath('potion')">Ambil ramuan</button>
            <button onclick="choosePath('leaveRoom')">Keluar dari bilik</button>
        `;
    }

    // Selam ke dasar sungai
    else if (choice === "dive") {
        storyText.innerHTML = "Anda menyelam jauh ke dasar sungai dan menemui sebuah kuil yang tenggelam. Di dalam kuil itu terdapat artefak kuno yang dapat memberikan kuasa tak terhingga. Namun, artefak itu juga membawa kutukan bagi sesiapa yang mencurinya.";
        choices.innerHTML = `
            <button onclick="choosePath('takeArtifact')">Ambil artefak</button>
            <button onclick="choosePath('leaveArtifact')">Tinggalkan artefak</button>
        `;
    }

    // Berjalan menyusuri sungai
    else if (choice === "walk") {
        storyText.innerHTML = "Anda berjalan menyusuri sungai dan menemui sebuah desa yang damai. Penduduk desa menyambut anda dengan hangat, tetapi mereka memberi amaran tentang ancaman yang datang dari hutan gelap. Anda harus membuat keputusan untuk melawan ancaman atau tetap di desa.";
        choices.innerHTML = `
            <button onclick="choosePath('fight')">Melawan ancaman</button>
            <button onclick="choosePath('stay')">Tetap di desa</button>
        `;
    }

    // Pilih Kuasa Cahaya
    else if (choice === "light") {
        storyText.innerHTML = "Dengan kuasa cahaya, anda menjadi pelindung dunia. Anda menyembuhkan makhluk yang terluka dan membasmi kuasa gelap. Dunia Valoria diselamatkan, dan anda menjadi legenda.";
        choices.innerHTML = "";
    }

    // Pilih Kuasa Kegelapan
    else if (choice === "darkness") {
        storyText.innerHTML = "Dengan kuasa kegelapan, anda menakluk dunia ini dengan kekuatan yang tidak tertandingi. Tetapi kuasa ini membawa kesepian dan kerosakan, dan akhirnya anda ditinggalkan di dunia yang hancur.";
        choices.innerHTML = "";
    }

    // Ambil kunci emas
    else if (choice === "key") {
        storyText.innerHTML = "Kunci emas itu membuka sebuah pintu rahsia di hutan, membawa anda ke dunia lain yang penuh dengan rahsia dan petualangan baru. Anda kini menjadi penjaga pintu antara dua dunia.";
        choices.innerHTML = "";
    }

    // Tinggalkan sungai
    else if (choice === "leaveRiver") {
        storyText.innerHTML = "Anda meninggalkan sungai dan meneruskan perjalanan ke arah matahari terbenam, dengan banyak lagi petualangan menanti di hadapan.";
        choices.innerHTML = "";
    }

    // Selamatkan dunia
    else if (choice === "saveWorld") {
        storyText.innerHTML = "Anda berjaya menyelamatkan dunia Valoria dan menjadi wira yang dikenang sepanjang zaman. Dunia kembali aman dan makhluk-makhluk ajaib hidup dengan harmoni.";
        choices.innerHTML = "";
    }

    // Melarikan diri
    else if (choice === "escape") {
        storyText.innerHTML = "Anda melarikan diri dan hidup dalam kesunyian, tetapi pilihan anda membolehkan dunia terus dipenuhi ancaman gelap.";
        choices.innerHTML = "";
    }

    // Ambil ramuan
    else if (choice === "potion") {
        storyText.innerHTML = "Ramuan itu membuka pintu ke dunia lain, penuh dengan makhluk dan kuasa yang tidak terbayangkan. Anda memulakan perjalanan baru yang penuh misteri.";
        choices.innerHTML = "";
    }

    // Keluar dari bilik
    else if (choice === "leaveRoom") {
        storyText.innerHTML = "Anda meninggalkan bilik rahsia dan kembali ke dunia luar, mengetahui bahawa rahsia dunia ini akan kekal dalam hati anda selamanya.";
        choices.innerHTML = "";
    }

    // Ambil artefak
    else if (choice === "takeArtifact") {
        storyText.innerHTML = "Artefak itu memberi anda kuasa yang tak terbatas, tetapi dengan harga yang tinggi. Dunia ini berada di ambang kehancuran kerana tindakan anda.";
        choices.innerHTML = "";
    }

    // Tinggalkan artefak
    else if (choice === "leaveArtifact") {
        storyText.innerHTML = "Anda meninggalkan artefak itu dan kembali ke dunia luar, memilih jalan yang lebih tenang dan penuh harapan.";
        choices.innerHTML = "";
    }

    // Melawan ancaman
    else if (choice === "fight") {
        storyText.innerHTML = "Anda berjuang dengan keberanian yang luar biasa dan menyelamatkan dunia dari ancaman. Anda menjadi pahlawan di hati setiap orang.";
        choices.innerHTML = "";
    }

    // Tetap di desa
    else if (choice === "stay") {
        storyText.innerHTML = "Anda memilih untuk hidup dengan aman di desa. Walaupun dunia luar penuh bahaya, anda merasa tenang di tempat yang penuh kedamaian.";
        choices.innerHTML = "";
    }
}

