<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class HostStats extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'week',
        'year',
        'current_position',
        'average_driver_finish',
        'average_pick_place',
        'race_id',
        'host_id',
        'pick_id',
    ];

    public function host(): BelongsTo
    {
        return $this->belongsTo(Host::class);
    }

    public function race(): HasOne
    {
        return $this->hasOne(Race::class);
    }

    public function pick(): HasOne
    {
        return $this->hasOne(Pick::class);
    }
}
