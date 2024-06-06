<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\City;

class CitySeeder extends Seeder
{
    public function run()
    {
        $cities = [
            'Casablanca',
            'Fez',
            'Tangier',
            'Marrakech',
            'Salé',
            'Meknes',
            'Rabat',
            'Oujda',
            'Kenitra',
            'Agadir',
            'Tetouan',
            'Safi',
            'Mohammedia',
            'Khouribga',
            'El Jadida',
            'Beni Mellal',
            'Aït Melloul',
            'Nador',
            'Dar Bouazza',
            'Taza',
            'Settat',
            'Larache',
            'Ksar El Kebir',
            'Khemisset',
            'Guelmim',
            'Berrechid',
            'Taourirt',
            'Berkane',
            'Sidi Slimane',
            'Errachidia',
            'Guercif',
            'Oued Zem',
            'Inezgane',
            'Tifelt',
            'Taroudant',
            'Essaouira',
            'Ouarzazate',
            'Sefrou',
            'Dcheira El Jihadia',
            'Tan-Tan',
            'Youssoufia',
            'El Aioun',
            'Benslimane',
            'Martil',
            'Fquih Ben Salah',
            'Suq as-Sabt Awlad an-Nama',
            'Dakhla',
            'Azrou',
            'Tiznit',
            'Midelt',
            'Skhirat',
            'Boujdour',
            'Taounate',
            'Sidi Bennour',
            'M\'diq',
            'Sidi Ifni',
            'Tinghir',
            'Zagora',
            'Smara',
        ];

        foreach ($cities as $city) {
            City::create([
                'name' => $city,
            ]);
        }
    }
}
