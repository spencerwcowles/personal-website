export interface Album {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  link?: string;
}

export const albums: Album[] = [
  {
    id: "1",
    title: "Blonde",
    artist: "Frank Ocean",
    coverUrl: "/images/albums/blonde.jpeg",
    link: "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf",
  },
  {
    id: "2",
    title: "The Miseducation of Lauryn Hill",
    artist: "Lauryn Hill",
    coverUrl: "/images/albums/miseducation.png",
    link: "https://open.spotify.com/album/1BZoqf8Zje5nGdwZhOjAtD",
  },
  {
    id: "3",
    title: "Freudian",
    artist: "Daniel Caesar",
    coverUrl: "/images/albums/freudian.jpg",
    link: "https://open.spotify.com/album/4E1XUBMTpLO7GpBzUo65Jp",
  },
  {
    id: "4",
    title: "Songs in the Key of Life",
    artist: "Stevie Wonder",
    coverUrl: "/images/albums/keyoflife.jpg",
    link: "https://open.spotify.com/album/6YUCc2RiXcEKS9ibuZxjt0",
  },
  {
    id: "5",
    title: "Ctrl",
    artist: "SZA",
    coverUrl: "/images/albums/ctrl.png",
    link: "https://open.spotify.com/album/76290XdXVF9rPzGdNRWdCh",
  },
  {
    id: "6",
    title: "Ella and Louis",
    artist: "Ella Fitzgerald and Louis Armstrong",
    coverUrl: "/images/albums/ellaandlouis.jpg",
    link: "https://open.spotify.com/album/3kfnwa4p4uYiTOP8K8ooSE",
  },
  {
    id: "7",
    title: "Never Enough",
    artist: "Daniel Caesar",
    coverUrl: "/images/albums/neverenough.png",
    link: "https://open.spotify.com/album/7ivbFszr1TbVadj89BIy1y",
  },
  {
    id: "8",
    title: "The Stranger",
    artist: "Billy Joel",
    coverUrl: "/images/albums/stranger.jpg",
    link: "https://open.spotify.com/album/3IILMjMMnoN2sKzgesX8KV",
  },
];
