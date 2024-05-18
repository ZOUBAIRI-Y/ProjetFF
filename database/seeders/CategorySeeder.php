<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Facades\File;
use Faker\Factory as Faker;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $propertyImages = File::files(storage_path('app/public/properties'));

        $faker = Faker::create();
        $randomImage = $propertyImages[array_rand($propertyImages)];

        $relativePath = '/storage/properties/' . basename($randomImage);
        foreach (range(1, 10) as $index) {
            Category::create([
                'name' => $faker->word,
                'image' => $relativePath,
            ]);
        }
    }
}
