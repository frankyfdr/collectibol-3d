export const randomColor = () => `hsl(${Math.random() * 360}, 70%, 50%)`;

export const randomPosition = (): [number, number, number] => [(Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4];

export const randomSize = () => Math.random() * 0.5 + 0.3;

export const randomString = () => {
  const length = 9;
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const randomDirection = (): 'x' | 'y' | 'z' => {
  const directions = ['x', 'y', 'z'];
  return directions[Math.floor(Math.random() * directions.length)] as 'x' | 'y' | 'z';
};
export const randomVelocity = () => Math.random() * 0.01 + 0.03;
