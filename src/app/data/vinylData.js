const vinylData = {
  rock: [
    {
      id: 1,
      name: "Vinyl Classic Rock 1",
      image: "/vinyle-classic-rock.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ullamcorper lorem.",
      price: 29.99,
      slug: "vinyl-classic-rock-1"
    },
    {
      id: 2,
      name: "Vinyl Classic Rock 2",
      image: "/vinyle-classic-rock.png",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      price: 34.99,
      slug: "vinyl-classic-rock-2"
    },
    {
      id: 3,
      name: "Vinyl Classic Rock 3",
      image: "/vinyle-classic-rock.png",
      description: "Nulla a ligula bibendum, volutpat est nec, rhoncus est. Integer vel odio dignissim, placerat.",
      price: 27.99,
      slug: "vinyl-classic-rock-3"
    }
  ],
  jazz: [
    {
      id: 1,
      name: "Vinyl Jazz Collection 1",
      image: "/vinyl-jazz-collection.png",
      description: "Fusce eu massa quis justo fermentum scelerisque. Proin id sapien eu eros volutpat venenatis.",
      price: 19.99,
      slug: "vinyl-jazz-collection-1"
    },
    {
      id: 2,
      name: "Vinyl Jazz Collection 2",
      image: "/vinyl-jazz-collection.png",
      description: "Vestibulum sodales ligula nec arcu feugiat, nec sollicitudin purus lobortis. Sed egestas.",
      price: 22.99,
      slug: "vinyl-jazz-collection-1"
    },
    {
      id: 3,
      name: "Vinyl Jazz Collection 3",
      image: "/vinyl-jazz-collection.png",
      description: "Donec congue sem at odio consequat, ut venenatis libero vestibulum. Vivamus ullamcorper.",
      price: 24.99,
      slug: "vinyl-jazz-collection-3"
    }
  ],
  newProducts: [
    {
      id: 1,
      name: "Vinyl Classic Rock 1",
      image: "/vinyle-classic-rock.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ullamcorper lorem.",
      price: 29.99,
    },
    {
      id: 2,
      name: "Vinyl Classic Rock 2",
      image: "/vinyle-classic-rock.png",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      price: 34.99
    },
    {
      id: 3,
      name: "Vinyl Classic Rock 3",
      image: "/vinyle-classic-rock.png",
      description: "Nulla a ligula bibendum, volutpat est nec, rhoncus est. Integer vel odio dignissim, placerat.",
      price: 27.99
    }
  ],
  availableProducts: [
    {
      id: 1,
      name: "Vinyl Classic Rock 1",
      image: "/vinyle-classic-rock.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ullamcorper lorem.",
      price: 29.99,
      slug: "vinyl-classic-rock-1"
    },
    {
      id: 2,
      name: "Vinyl Jazz Collection 1",
      image: "/vinyl-jazz-collection.png",
      description: "Fusce eu massa quis justo fermentum scelerisque. Proin id sapien eu eros volutpat venenatis.",
      price: 19.99,
      slug: "vinyl-jazz-collection-1"
    },
    {
      id: 3,
      name: "Vinyl Classic Rock 3",
      image: "/vinyle-classic-rock.png",
      description: "Nulla a ligula bibendum, volutpat est nec, rhoncus est. Integer vel odio dignissim, placerat.",
      price: 27.99,
      slug: "vinyl-classic-rock-3"
    },
    {
      id:4,
      name: "Vinyl Classic Rock 1",
      image: "/vinyle-classic-rock.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ullamcorper lorem.",
      price: 29.99,
      slug: "vinyl-classic-rock-4"
    },
    {
      id: 5,
      name: "Vinyl Jazz Collection 5",
      image: "/vinyl-jazz-collection.png",
      description: "Fusce eu massa quis justo fermentum scelerisque. Proin id sapien eu eros volutpat venenatis.",
      price: 19.99,
      slug: "vinyl-jazz-collection-5"
    },
    {
      id: 6,
      name: "Vinyl Classic Rock 6",
      image: "/vinyle-classic-rock.png",
      description: "Nulla a ligula bibendum, volutpat est nec, rhoncus est. Integer vel odio dignissim, placerat.",
      price: 27.99,
      slug: "vinyl-classic-rock-6"

    },
    {
      id: 7,
      name: "Vinyl Classic Rock 7",
      image: "/vinyle-classic-rock.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ullamcorper lorem.",
      price: 29.99,
      slug: "vinyl-classic-rock-7"
    },
    {
      id: 8,
      name: "Vinyl Jazz Collection 8",
      image: "/vinyl-jazz-collection.png",
      description: "Fusce eu massa quis justo fermentum scelerisque. Proin id sapien eu eros volutpat venenatis.",
      price: 19.99,
      slug: "vinyl-jazz-collection-8"
    },
    {
      id: 9,
      name: "Vinyl Classic Rock 9",
      image: "/vinyle-classic-rock.png",
      description: "Nulla a ligula bibendum, volutpat est nec, rhoncus est. Integer vel odio dignissim, placerat.",
      price: 27.99,
      slug: "vinyl-classic-rock-9"
    },
    {
      id: 10,
      name: "Vinyl Classic Rock 10",
      image: "/vinyle-classic-rock.png",
      description: "Nulla a ligula bibendum, volutpat est nec, rhoncus est. Integer vel odio dignissim, placerat.",
      price: 27.99,
      slug: "vinyl-classic-rock-10"
    }
  ],
  promotions: [
    {
      id: 1,
      name: "Vinyl Classic Rock 1",
      image: "/vinyle-classic-rock.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ullamcorper lorem.",
      price: 29.99,
      slug: "vinyl-classic-rock-1",
      features: ["Édition limitée", "Remasterisé pour une qualité audio supérieure", "Comprend les meilleurs succès"],
      benefits: "Idéal pour les amateurs de rock classique recherchant des enregistrements authentiques et une qualité audio exceptionnelle.",
    },
    {
      id: 2,
      name: "Vinyl Jazz Collection 1",
      image: "/vinyl-jazz-collection.png",
      description: "Fusce eu massa quis justo fermentum scelerisque. Proin id sapien eu eros volutpat venenatis.",
      price: 19.99,
      slug: "vinyl-jazz-collection-1",
      features: ["Inclut une variété de styles de jazz", "Enregistrements originaux restaurés", "Son cristallin et pur"],
      benefits: "Parfait pour ceux qui apprécient la diversité musicale du jazz et veulent une expérience d'écoute riche et immersive.",
    },
    {
      id: 3,
      name: "Vinyl Classic Rock 3",
      image: "/vinyle-classic-rock.png",
      description: "Nulla a ligula bibendum, volutpat est nec, rhoncus est. Integer vel odio dignissim, placerat.",
      price: 27.99,
      slug: "vinyl-classic-rock-3",
      features: ["Pressage de vinyle de haute qualité", "Édition limitée à collectionner", "Son riche et chaleureux"],
      benefits: "Idéal pour les passionnés de rock classique qui apprécient les détails et la qualité sonore exceptionnelle du vinyle.",
    },
    {
      id: 4,
      name: "Vinyl Classic Rock 4",
      image: "/vinyle-classic-rock.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ullamcorper lorem.",
      price: 29.99,
      slug: "vinyl-classic-rock-4",
      features: ["Édition limitée", "Enregistrements authentiques", "Son de haute qualité"],
      benefits: "Parfait pour les collectionneurs et ceux qui apprécient la riche histoire de la musique rock classique.",
    },
    {
      id: 5,
      name: "Vinyl Jazz Collection 5",
      image: "/vinyl-jazz-collection.png",
      description: "Fusce eu massa quis justo fermentum scelerisque. Proin id sapien eu eros volutpat venenatis.",
      price: 19.99,
      slug: "vinyl-jazz-collection-5",
      features: ["Compilation de grands noms du jazz", "Enregistrements restaurés avec soin", "Qualité audio exceptionnelle"],
      benefits: "Parfait pour les amateurs de jazz cherchant à enrichir leur collection avec des enregistrements historiques et précieux.",
    },
    // Ajoutez d'autres promotions comme nécessaire
  ],
};

export default vinylData;