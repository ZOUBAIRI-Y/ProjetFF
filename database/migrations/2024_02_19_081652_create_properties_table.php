<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->text('description');
            $table->decimal('price', 12, 2);
            $table->decimal('deposite', 12, 2)->default(0);
            $table->decimal('space', 12, 2);
            $table->foreignId('city_id')->constrained()->onDelete('cascade');
            $table->text('address');
            $table->enum('renting_type', ["monthly", "daily", "yearly"]);
            $table->enum('features', ['garage', "roof", 'internet', 'pool', 'fireplace', 'garden', 'balcony'])->nullable();
            $table->date('ready_date');
            $table->integer('rooms');
            $table->integer('baths')->default(1);
            $table->text('images')->nullable();
            $table->enum('status', ["active", "inactive"])->default("active");
            $table->foreignId('category_id')->constrained('categories')->onDelete("cascade");
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('properties');
    }
};
