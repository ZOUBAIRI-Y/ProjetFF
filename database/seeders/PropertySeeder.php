<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Property;
use App\Models\Category;
use App\Models\City;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class PropertySeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        $propertyImages = File::files(storage_path('app/public/properties'));

        foreach (range(1, 4) as $index) {
            $category = Category::inRandomOrder()->first();
            $city = City::inRandomOrder()->first();

            $randomImage = $propertyImages[array_rand($propertyImages)];

            $relativePath = '/storage/properties/' . basename($randomImage);
            Property::create([
                'description' => $faker->text,
                'price' => $faker->randomFloat(2, 100, 1000),
                'city_id' => $city->id,
                'address' => $faker->address,
                'images' => json_encode([$relativePath]),
                'status' => $faker->randomElement(["active", "inactive"]),
                'user_id' =>  (int) 1,
                'category_id' => $category->id,
                "deposite" => $faker->numberBetween(1000, 10000),
                "ready_date" => $faker->dateTimeThisDecade(),
                "rooms" => $faker->numberBetween(1, 10),
                "space" => $faker->numberBetween(10, 1000),
                "renting_type" => $faker->randomElement(["monthly", "daily", "yearly"])
            ]);
        }

        foreach (range(1, 150) as $index) {
            $category = Category::inRandomOrder()->first();
            $city = City::inRandomOrder()->first();

            $randomImage1 = $propertyImages[array_rand($propertyImages)];
            $randomImage2 = $propertyImages[array_rand($propertyImages)];
            $randomImage5 = $propertyImages[array_rand($propertyImages)];
            $randomImage6 = $propertyImages[array_rand($propertyImages)];

            $relativePath1 = '/storage/properties/' . basename($randomImage1);
            $relativePath2 = '/storage/properties/' . basename($randomImage2);
            $relativePath5 = '/storage/properties/' . basename($randomImage5);
            $relativePath6 = '/storage/properties/' . basename($randomImage6);

            Property::create([
                'description' => $faker->text,
                'price' => $faker->randomFloat(2, 100, 1000),
                'city_id' => $city->id,
                'address' => $faker->address,
                'images' => json_encode([$relativePath1, $relativePath2, $relativePath5, $relativePath6]),
                'status' => $faker->randomElement(["active", "inactive"]),
                'user_id' => $faker->numberBetween(1, 10),
                'category_id' => $category->id,
                "deposite" => $faker->numberBetween(1000, 10000),
                "ready_date" => $faker->dateTimeThisDecade(),
                "rooms" => $faker->numberBetween(1, 10),
                "space" => $faker->numberBetween(10, 1000),
                "renting_type" => $faker->randomElement(["monthly", "daily", "yearly"])
            ]);
        }
    }
}
