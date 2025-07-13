<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Comingsoon');
});
Route::get('/photo-booth', function () {
    return Inertia::render('PhotoBooth');
});
Route::get('/photo-result', function () {
    return Inertia::render('PhotoResult');
});
Route::get('/ukm', function () {
    return Inertia::render('home/Ukm');
});
Route::get('/ukm/{id}', function ($id) {
    return Inertia::render('home/Ukm', ['id' => $id]);
});

Route::get('/dev', function () {
    return Inertia::render('dev/Dev');
});

Route::get('/{any}', function () {
    return Inertia::render('EmpatNolEmpat');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
