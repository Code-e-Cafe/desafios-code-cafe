const elementoEmoji = document.getElementById('elementoEmoji');

const botaoEmoji = document.getElementById('botaoEmoji');
botaoEmoji.addEventListener('click', chamarEmoji);

function chamarEmoji() {
    elementoEmoji.innerText = geradorDeEmoji();
}

function geradorDeEmoji() {
    const emojis = ['☕', '🥜', '👶', '👶🏻', '👶🏼', '👶🏽', '👶🏾', '👶🏿', '😂', '😅', '😋', '😎', '🥰', '🤗', '🤔', '😑', '🙄', '🥱', '😪', '🤤', '😭', '😢', '😤', '🥺', '🤮', '🤢', '💀', '☠', '💑', '👩‍❤️‍👩', '👨‍❤️‍👨', '👩‍👩‍👧', '👩‍👩‍👦', '✨', '🎉', '🎶', '🎵', '🎮', '🏆', '🧩', '🍙', '🍻', '🥤', '🥑', '🥓', '🥚', '🍔', '🍕', '🌭', '🍟', '🥩', '🍠', '🥗', '🥔', '🍜', '🥜', '🚗', '🚓', '🚕', '🛹', '🦽', '🦼', '🏝', '🏜', '🏖', '🛣', '🏕', '🏞', '🧻', '🚽', '🪒', '🧷', '🧹', '🌝', '🌚', '🌟', '⭐', '🌠', '☄', '☃', '⛄', '🔥', '💧', '❄', '🌊', '❤', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💔', '💖', '🕳', '💫', '💨', '💦', '💤', '💥', '💢', '💩', '👾', '👽', '👻', '🐾', '🦮', '🐕‍🦺'];
    const numeroAleatorio = Math.floor(Math.random() * emojis.length);
    const emojiAleatorio = emojis[numeroAleatorio];
    return emojiAleatorio;
}

