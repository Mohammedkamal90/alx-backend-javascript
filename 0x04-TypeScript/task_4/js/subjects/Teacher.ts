namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;
  }
}

namespace Subjects {
  export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
  };
}
