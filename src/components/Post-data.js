
//react-ulti-carousel responsiveness
export const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  {/* these are the contents for carousel in array form */}
 export const postData = [
    {
      id: 1,
      imageurl: "images/image-9.png",
      name: "New Year's Day",
      date: "2 days ago",
    },

    {
      id: 2,
      imageurl: "images/image-9.png",
      name: "I made a logo!",
      date: "12/12/2022",
    },

    {
      id: 3,
      imageurl: "images/image-9.png",
      name: "Let's Welcome",
      date: "Yesterday",
    },

    {
      id: 4,
      imageurl: "images/image-9.png",
      name: "Happy Birthday",
      date: "1/05/2023",
    },

    {
      id: 5,
      imageurl: "images/image-9.png",
      name: "Daily Commissions",
      date: "10/06/2022",
    },

    {
      id: 6,
      imageurl: "images/image-9.png",
      name: "Enrollment",
      date: "12/21/2022",
    },
  ]