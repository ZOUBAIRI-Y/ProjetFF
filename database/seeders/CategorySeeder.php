<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Facades\File;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $propertyImages = File::files(storage_path('app/public/properties'));

        $categories = [
            'Apartment',
            'Villa',
            'Studio',
            'Townhouse',
            'Penthouse',
            'Duplex',
            'Loft',
            'Condominium',
            'Bungalow',
            'Farmhouse',
        ];

        foreach ($categories as $category) {
            $randomImage = $propertyImages[array_rand($propertyImages)];
            $relativePath = '/storage/properties/' . basename($randomImage);

            Category::create([
                'name' => $category,
                'description' => 'description de ' . $category,
                'image' => $relativePath,
            ]);
        }
    }
}
