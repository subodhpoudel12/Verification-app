const verificationCode = (req, res) => {
    try {
        const { code } = req.body;
        if (!code || code.length !== 6 || code.charAt(5) === '7' || isNaN(code)) {
            throw new Error('Verification Error');
        } else {
            res.json({ success: true });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};
module.exports = verificationCode;
