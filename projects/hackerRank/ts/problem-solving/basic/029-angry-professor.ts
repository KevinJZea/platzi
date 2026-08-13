/*

A Discrete Mathematics professor has a class of students.
Frustrated with their lack of discipline,
the professor decides to cancel class if fewer than some number of students are present when class starts.
Arrival times go from on time ( arrivalTime <= 0 ) to arrived late ( arrivalTime > 0 ).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

Example
n = 5
k = 3
a = [-2, -1, 0, 1, 2]

The first 3 students arrived on. The last 2 were late. The threshold is 3 students, so class will go on. Return YES.

Note: Non-positive arrival times ( a[i] <= 0 ) indicate the student arrived early or on time;
positive arrival times ( a[i] > 0 ) indicate the student arrived a[i] minutes late.

*/

function angryProfessor(k: number, a: number[]): string {
  const nonLateStudents = a.filter((student) => student <= 0);
  return nonLateStudents.length >= k ? 'NO' : 'YES';
}

angryProfessor(3, [-1, -3, 4, 2]); // YES
angryProfessor(2, [0, -1, 2, 1]); // NO

// AI

function angryProfessor2(k: number, a: number[]): string {
  let onTime = 0;
  for (const t of a) {
    if (t <= 0) onTime++;
  }
  return onTime < k ? 'YES' : 'NO';
}
