type Habit = {
  id: number;
  name: String;
  description: String;
  tracking: number;
}

export enum HabitState {
  Display = 1,
  Edit,
  Tracking,
}

export default Habit;
