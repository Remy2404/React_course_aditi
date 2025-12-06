
export const Hello = () => {
    const title = "Hello Component";
    const description = "This is a simple hello component.";
    const imgUrl = "https://tse2.mm.bing.net/th/id/OIP.jbhURu-xa0EXQDnnABjZ9QHaFS?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3";
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt="Hello Component" />
    </div>
  );
}
