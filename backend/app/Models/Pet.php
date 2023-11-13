<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    protected $fillable = ['name', 'pet_type_id', 'breed_id', 'size_id', 'age_id', 'client_id'];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function petType()
    {
        return $this->belongsTo(PetType::class);
    }

    public function breed()
    {
        return $this->belongsTo(Breed::class);
    }

    public function size()
    {
        return $this->belongsTo(PetSize::class);
    }

    public function gender()
    {
        return $this->belongsTo(PetGender::class);
    }

    public function age()
    {
        return $this->belongsTo(PetAge::class);
    }
}
