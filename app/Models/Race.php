<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Race extends Model
{
    use CrudTrait;
    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'name',
        'laps',
        'miles',
        'track_id',
        'date',
        'regular_season',
    ];

    public function track(): BelongsTo
    {
        return $this->belongsTo(Track::class);
    }
}
