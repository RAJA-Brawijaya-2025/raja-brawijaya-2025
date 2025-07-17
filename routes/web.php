<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landingpage');
});
Route::get('/photo-booth', function () {
    return Inertia::render('PhotoBooth');
});
Route::get('/photo-result', function () {
    return Inertia::render('PhotoResult');
});
Route::get('/dev', function () {
    return Inertia::render('dev/Dev');
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/{any}', function () {
    return Inertia::render('EmpatNolEmpat');
});
require __DIR__ . '/auth.php';