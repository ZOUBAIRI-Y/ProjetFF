<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Like;
use Faker\Factory as Faker;

class LikeSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 50) as $index) {
            Like::create([
                'user_id' => $faker->numberBetween(1, 10),
                'property_id' => $faker->numberBetween(1, 10),
            ]);
        }
    }
}
