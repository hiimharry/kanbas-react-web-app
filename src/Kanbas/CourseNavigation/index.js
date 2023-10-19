import { Link, useParams, useLocation } from "react-router-dom";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div class="col-2 d-none d-xl-block options mt-3">
      <div class="subtext mb-3 ms-2">
        FA 2024
      </div>
    <ul className="option-list">
      {links.map((link, index) => (
        <li className={`${pathname.includes(link.replace(" ", "%20")) && "option-item-selected"} py-1`}>
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`option-text ${pathname.includes(link.replace(" ", "%20")) && "option-text-selected"}`}
        >
          {link}
        </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default CourseNavigation;
