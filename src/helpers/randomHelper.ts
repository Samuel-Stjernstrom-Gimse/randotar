export const getRandomNumberInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomColorRgb = () => {
    const red = getRandomNumberInRange(0, 255);
    const green = getRandomNumberInRange(0, 255);
    const blue = getRandomNumberInRange(0, 255);

    return `rgb(${red},${green},${blue})`;
}

export const getRandomColorHex = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
