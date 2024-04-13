<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contact extends Model
{
    use HasFactory;
    protected $table = 'contacts';
    protected $fillable = ['alias', 'phone_code', 'owner_user_id', 'user_id'];
    
    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
