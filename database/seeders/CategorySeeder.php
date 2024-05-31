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
        foreach (range(1, 5) as $index) {
            $randomImage = $propertyImages[array_rand($propertyImages)];
            $relativePath = '/storage/properties/' . basename($randomImage);
            Category::create([
                'name' => $faker->word,
                'description' => $faker->text,
                'image' => $relativePath,
            ]);
        }
    }
}
