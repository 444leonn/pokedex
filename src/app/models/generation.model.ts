export interface GenerationData {
    id: number,
    name: string,
    main_region: [
        name: string,
        url: string,
    ],
    pokemon_species: [
        pokemon: {
            name: string,
            url: string,
        }
    ],
}