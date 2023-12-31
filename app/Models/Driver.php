<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    use CrudTrait;
    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'first_name',
        'last_name',
        'suffix',
        'nickname',
        'birthday',
        'country',
        'team_name',
        'externaL_id',
    ];

    public function getFullNameAttribute(): string
    {
        $firstPart = $this->nickname ?? $this->first_name;
        return "{$firstPart} {$this->last_name}";
    }
}
