document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const youtubeUsername = document.getElementById('youtube-username').value;
    const usdtWallet = document.getElementById('usdt-wallet').value;

    // Placeholder for actual subscription verification and payment processing
    // This part would normally involve backend integration with YouTube API and a payment service

    // Display success message
    document.getElementById('message').innerText = Thank you, ${youtubeUsername}! Your subscription has been confirmed. 10 USDT will be sent to your wallet address ${usdtWallet} within 10 to 15 minutes.;
});
