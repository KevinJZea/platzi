import { useQuery, type QueryFunction } from '@tanstack/react-query';
import { memo, Suspense, useMemo, useState, useTransition } from 'react';
import './TanstackQuery.css';

const TanstackQuery = () => {
  const { data: courses, isLoading, error } = useCourses();
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 2;

  const [isPending, startTransition] = useTransition();

  const currentCourses = useMemo(() => {
    if (!courses) return [];

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;

    return courses?.slice(indexOfFirstCourse, indexOfLastCourse);
  }, [courses, currentPage, coursesPerPage]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!courses) return <p>There was an error fetching the courses.</p>;

  return (
    <section>
      <h1>📚 Learning Courses 📚</h1>

      <Suspense fallback={<p>Loading courses...</p>}>
        <CourseList courses={currentCourses} />
      </Suspense>

      <div>
        {Array.from(
          { length: Math.ceil(courses.length / coursesPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => startTransition(() => setCurrentPage(index + 1))}
            >
              {index + 1}
            </button>
          )
        )}
      </div>

      {isPending && <p>Loading new page...</p>}
    </section>
  );
};

const CourseListComponent: React.FC<{ courses: Course[] }> = ({ courses }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <p>{course.duration}</p>
        </li>
      ))}
    </ul>
  );
};

const CourseList = memo(CourseListComponent);

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
}

const fetchCourses: QueryFunction<Course[]> = async () => {
  const response = await fetch('/api/courses.json');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const useCourses = () => {
  return useQuery<Course[]>({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });
};

export default TanstackQuery;
