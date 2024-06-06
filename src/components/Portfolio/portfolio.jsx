import React from "react";
import Grid from "@mui/material/Grid";
import ProjectCard from "../Project/projectCard"; // Asegúrate de que la ruta de importación sea correcta

const projects = [
  {
    title: "Facebook",
    description: "Conéctate con amigos y el mundo que te rodea en Facebook.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
    link: "https://www.facebook.com",
  },
  {
    title: "YouTube",
    description:
      "Disfruta de tus vídeos y música favoritos, sube contenido original y comparte con tus amigos, familiares y el mundo en YouTube.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
    link: "https://www.youtube.com",
  },
  {
    title: "Twitter",
    description:
      "Desde noticias de última hora y entretenimiento hasta deportes y política, obtén las historias completas con todos los comentarios en Twitter.",
    image:
      "https://www.elfinanciero.com.mx/resizer/juWlcrqrLAk6N14bwFl-4GH316Y=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/X347YSAZFBHQVFIQY5RWE6CFJE.jpg",
    link: "https://www.twitter.com",
  },
  {
    title: "Google",
    description:
      "Busca en la web la información del mundo, incluidas páginas web, imágenes, vídeos y más.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQExly8Xk3GWUOkmUGETvVobduKHck3ivnVA&s",
    link: "https://www.google.com",
  },
];

const Portfolio = () => {
  return (
    <Grid container spacing={4} sx={{ padding: 2 }}>
      {projects.map((project, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Portfolio;
