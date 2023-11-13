<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Breed extends Model {
    protected $fillable = ['name', 'pet_type_id'];

    public function petType()
    {
        return $this->belongsTo(PetType::class);
    }
}