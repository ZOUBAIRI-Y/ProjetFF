<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        $propertyImages = File::files(storage_path('app/public/lessors'));
        $faker = Faker::create();
        $randomImage = $propertyImages[array_rand($propertyImages)];
        $relativePath = '/storage/lessors/' . basename($randomImage);
        User::create([
            'firstname' => $faker->firstName,
            'name' => $faker->firstName,
            'lastname' => $faker->lastName,
            'password' => Hash::make("12341234"),
            'email' => "email@email.com",
            'avatar' => $relativePath,
            'phone1' => $faker->phoneNumber,
            'phone2' => $faker->phoneNumber
        ]);
        foreach (range(1, 50) as $index) {
            $randomImage = $propertyImages[array_rand($propertyImages)];
            $relativePath = '/storage/lessors/' . basename($randomImage);

            User::create([
                'firstname' => $faker->firstName,
                'name' => $faker->firstName,
                'lastname' => $faker->lastName,
                'password' => Hash::make($faker->password),
                'email' => $faker->unique()->safeEmail,
                'avatar' =>  $relativePath,
                'phone1' => $faker->phoneNumber,
                'phone2' => $faker->phoneNumber
            ]);
        }
    }
}
