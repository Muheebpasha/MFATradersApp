<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SliderController extends Controller
{
    // Display all sliders
    public function index()
    {
        $sliders = Slider::paginate(10); // 10 items per page
        return view('sliders.index', compact('sliders'));
    }

    // Show form to create a new slider
    public function create()
    {
        return view('sliders.create');
    }

    // Store a new slider
    public function store(Request $request)
    {
        $request->validate([
            'caption' => 'nullable|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Step 1: Create slider without image
        $slider = Slider::create([
            'caption' => $request->caption,
            'image_path' => '' // placeholder
        ]);

        // Step 2: Generate unique filename using slider_id
        if ($request->hasFile('image')) {
            $extension = $request->file('image')->getClientOriginalExtension();
            $filename = 'slider_' . $slider->id . '.' . $extension;

            // Store the file with the unique name
            $path = $request->file('image')->storeAs('sliders', $filename, 'public');

            // Step 3: Update the slider with the image path
            $slider->update(['image_path' => $path]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Slider created successfully!',
            'data' => $slider
        ]);
    }


    // Show a single slider
    public function show(Slider $slider)
    {
        return view('sliders.show', compact('slider'));
    }

    // Show form to edit a slider
    public function edit(Slider $slider)
    {
        return view('sliders.edit', compact('slider'));
    }

    // Update a slider
    public function update(Request $request, Slider $slider)
    {
        $request->validate([
            'caption' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($slider->image_path && Storage::disk('public')->exists($slider->image_path)) {
                Storage::disk('public')->delete($slider->image_path);
            }

            // Generate unique filename using slider_id
            $extension = $request->file('image')->getClientOriginalExtension();
            $filename = 'slider_' . $slider->id . '.' . $extension;

            // Store the file with the unique name (overwrites old if exists)
            $path = $request->file('image')->storeAs('sliders', $filename, 'public');

            $slider->image_path = $path;
        }

        $slider->caption = $request->caption;
        $slider->save();
        return response()->json([
            'success' => true,
            'message' => 'Slider updated successfully!',
        ]);
    }


    // Delete a slider
    public function destroy(Slider $slider)
    {
        Storage::disk('public')->delete($slider->image_path);
        $slider->delete();

        return redirect()->route('sliders.index')->with('success', 'Slider deleted successfully!');
    }
}
