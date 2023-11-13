<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = ['first_name', 'last_name', 'email', 'phone', 'address'];

    public function pets()
    {
        return $this->hasMany(Pet::class);
    }
}
