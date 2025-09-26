    const jsConfetti = new JSConfetti();

    let alreadyCelebrated = false; // عشان الاحتفالية تحصل مرة واحدة بس

    window.addEventListener("scroll", function () {
        let documentHeight = document.documentElement.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;

        if (currentScroll + 5 >= documentHeight && !alreadyCelebrated) {
            alreadyCelebrated = true;

            jsConfetti.addConfetti({
                emojis: ['🎉', '✨', '💥', '🔥', '🥳'],
                emojiSize: 25,
                confettiNumber: 100,
            });
        }
    });