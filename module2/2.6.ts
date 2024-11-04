{
  // constrains

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr.x",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr.y",
    email: "y@gmail.com",
    devType: "NLWD",
  });
}
