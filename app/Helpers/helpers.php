<?php

if (!function_exists('breadcrumb')) {
    /**
     * Generate breadcrumb array from module and pages.
     *
     * @param string $module Translation module name
     * @param array $pages Array of ['text' => 'key', 'link' => 'url']
     * @return array
     */
    function breadcrumb(string $module, array $pages): array
    {
        $breadcrumb = [];

        foreach ($pages as $page) {
            $textKey = $module . '.' . $page['text'];
            $text = __($textKey);

            // Fallback if translation missing
            if ($text === $textKey) {
                $text = ucfirst(str_replace('-', ' ', $page['text']));
            }

            $breadcrumb[] = [
                'text' => $text,
                'link' => $page['link']
            ];
        }

        return $breadcrumb;
    }
}
