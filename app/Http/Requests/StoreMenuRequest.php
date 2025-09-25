<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMenuRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true; // change to your authorization logic if needed
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'module_name' => 'required|string',
            'url_string' => 'required|string',
            'route_name' => 'required|string',
            'is_parent' => 'required',
            'parent_id' => 'nullable',
            'icon' => 'nullable',
            'status' => 'required'
        ];
    }
}
