<?php
namespace App\Services;
use Illuminate\Support\Facades\URL;

class BreadcrumbService {


    public function prepareBreadcrumb(string $key, array $placeholders = []): array
{
    $items = config("breadcrumbs.$key", []);

    return array_map(function ($item) use ($placeholders) {
        $text = $item['text'] ?? '';
        $link = $item['link'] ?? '#';

        // replace placeholders
        foreach ($placeholders as $k => $v) {
            $text = str_replace("{{$k}}", $v, $text);
            $link = str_replace("{{$k}}", $v, $link);
        }

        // generate full URL if it's a relative path
        if ($link !== '#' && !preg_match('/^https?:\/\//', $link)) {
            $link = url($link);
        }

        return ['text' => $text, 'link' => $link];
    }, $items);
}
    public function replacePlaceholders(array $template, array $data): array
    {
        $replaced = [];

        foreach ($template as $key => $value) {
            // Replace in the key
            $newKey = is_string($key)
                ? preg_replace_callback('/\{(\w+)\}/', function ($matches) use ($data) {
                    $k = $matches[1];
                    return $data[$k] ?? $matches[0];
                }, $key)
                : $key;

            // Recursive replacement in values
            if (is_array($value)) {
                $newValue = $this->replacePlaceholders($value, $data);
            } elseif (is_string($value)) {
                $newValue = preg_replace_callback('/\{(\w+)\}/', function ($matches) use ($data) {
                    $k = $matches[1];
                    return $data[$k] ?? $matches[0];
                }, $value);
            } else {
                $newValue = $value;
            }

            $replaced[$newKey] = $newValue;
        }

        return $replaced;
    }
}