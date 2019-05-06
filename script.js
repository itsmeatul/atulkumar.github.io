let doorImage1=document.getElementById('door1');
let doorImage2=document.getElementById('door2');
let doorImage3=document.getElementById('door3');
const functionOne = (door) => {
  functionTwo();
}
const playDoor = () => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
  gameOver();
}
}
const botDoorPath ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
const beachDoorPath ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
const spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
const randomChoreDoorGenerator = () => {

  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0)
{
  openDoor1 = botDoorPath;
  openDoor2 = beachDoorPath;
  openDoor3 = spaceDoorPath;

}
else if (choreDoor === 1)
{
  openDoor2 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor3 = spaceDoorPath;

}
else {
  openDoor3 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor2 = spaceDoorPath;
}
}
door1.onclick = () => {
  doorImage1.src = openDoor1;
  playDoor();
}
door2.onclick = () => {
  doorImage2.src = openDoor2;
  playDoor();
}
door3.onclick = () => {
  doorImage3.src = openDoor3;
  playDoor();
}
randomChoreDoorGenerator();
